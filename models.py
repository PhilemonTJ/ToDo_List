from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Task(db.Model):
    __tablename__ = 'tasks'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(256), nullable=False)
    due_date = db.Column(db.String(32), nullable=True)
    category = db.Column(db.String(64), default='No Category')
    is_completed = db.Column(db.Boolean, default=False)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'due_date': self.due_date,
            'category': self.category,
            'is_completed': self.is_completed
        }
