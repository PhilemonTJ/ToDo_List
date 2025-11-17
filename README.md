# ToDo_List: A Full-Stack Task Management Application 🚀

This is a full-stack To-Do List application designed to help users efficiently manage their daily tasks. It provides a simple, clean, and intuitive interface for creating, viewing, updating, and deleting tasks.

***

## ✨ Features

* **Create** new tasks with a title.
* **View** a list of all current tasks.
* **Mark as Complete/Incomplete** (Update) tasks to track progress.
* **Delete** completed or unwanted tasks.
* **Persistent Data Storage** using a local database (`tasks.db`).

***

## 🛠️ Technologies Used

This project utilizes a robust technology stack to provide a fast and reliable task management experience.

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Backend** | **Python** | Serves as the application logic and API handler (likely Flask/Django). |
| **Database** | **SQLite** | A lightweight, file-based database used for persistent storage of tasks. |
| **Frontend** | **JavaScript, HTML, CSS** | Provides the user interface and is run by a **Node.js development server**. |
| **Dependencies** | `requirements.txt`, `package-lock.json` | Used to manage Python and Node.js (Frontend) dependencies, respectively. |

***

## ⚙️ Installation and Setup

Follow these steps to set up the project locally.

### Prerequisites

* **Python 3.x**
* **Node.js & npm** (required for the frontend build and development server)

### Backend Setup (Python)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/PhilemonTJ/ToDo_List.git
    cd ToDo_List
    ```

2.  **Create a virtual environment** (recommended):
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Linux/macOS
    # .\venv\Scripts\activate  # On Windows
    ```

3.  **Install Python dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

### Frontend Setup (JavaScript)

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```
2.  **Install Node dependencies:**
    ```bash
    npm install
    ```
3.  **Return to the root directory:**
    ```bash
    cd ..
    ```

***

## 🏃 Usage

### Running the Application (Requires Two Separate Terminals)

To run the full application, you need to start the backend API and the frontend development server simultaneously.

#### 1. Start the Backend API (Terminal 1)

1.  Ensure your Python virtual environment is active.
2.  Run the backend application from the root directory:
    ```bash
    python app.py
    ```
    The backend API will typically run on **`http://127.0.0.1:5000`**.

#### 2. Start the Frontend Dev Server (Terminal 2)

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
    The frontend client will now be available at **`http://localhost:5173`**.

### Accessing the App

* Open your web browser and navigate to the frontend address: **`http://localhost:5173`**.

***

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improving the app or want to report a bug, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

***

## 📄 Project Artifacts

This repository also contains videos related to the project development process:

* **`Sprint Meeting.mp4`**: A video artifact from a sprint planning or daily standup meeting.
* **`Retropsective Meeting.mp4`**: A video artifact from a retrospective meeting, reflecting on the completed sprint.

***

## 📜 License

This project is part of DevOps Assignment.
