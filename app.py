from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Task
import os

app = Flask(__name__, static_folder=None)
CORS(app)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DB_PATH = os.path.join(BASE_DIR, 'tasks.db')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + DB_PATH
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/api/tasks', methods=['POST'])
def create_task():
    data = request.get_json() or {}
    title = data.get('title')
    due_date = data.get('due_date')
    category = data.get('category', 'No Category')
    if not title:
        return jsonify({'error': 'Title is required'}), 400
    task = Task(title=title, due_date=due_date, category=category)
    db.session.add(task)
    db.session.commit()
    return jsonify(task.to_dict()), 201

@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.order_by(Task.id.desc()).all()
    return jsonify([t.to_dict() for t in tasks])



if __name__ == '__main__':
    app.run(debug=True)
