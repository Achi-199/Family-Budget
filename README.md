# Family Budget Management System

A full-stack web application for managing family budgets built with React (frontend) and Laravel (backend). This application allows users to track income and expenses, categorize transactions, and monitor their financial health.

## 🚀 Features

- **Budget Tracking**: Add, edit, and delete budget entries
- **Categories**: Organize expenses by categories
- **Real-time Updates**: Dynamic budget calculations
- **Responsive Design**: Mobile-friendly interface
- **RESTful API**: Clean API architecture with Laravel

## 🛠️ Technology Stack

### Frontend (Client)
- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling for responsive design
- **React Router** - Client-side routing

### Backend (Server)
- **Laravel 11** - PHP web application framework
- **SQLite** - Lightweight database for development
- **Laravel Sanctum** - API authentication
- **Eloquent ORM** - Database interactions

## 📁 Project Structure

```
Family-Budget/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── assets/         # Static assets
│   │   └── App.jsx         # Main App component
│   ├── public/             # Public assets
│   └── package.json        # Dependencies and scripts
├── server/                 # Laravel backend
│   ├── app/
│   │   ├── Http/Controllers/
│   │   └── Models/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── routes/
│   └── composer.json       # PHP dependencies
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **PHP** (v8.1 or higher)
- **Composer** (PHP package manager)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Achi-199/Family-Budget.git
   cd Family-Budget
   ```

2. **Setup Backend (Laravel)**
   ```bash
   cd server
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate
   php artisan serve
   ```

3. **Setup Frontend (React)**
   ```bash
   cd ../client
   npm install
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000

## 📊 API Endpoints

### Budget Entries
- `GET /api/budget-entries` - Get all budget entries
- `POST /api/budget-entries` - Create a new budget entry
- `GET /api/budget-entries/{id}` - Get a specific budget entry
- `PUT /api/budget-entries/{id}` - Update a budget entry
- `DELETE /api/budget-entries/{id}` - Delete a budget entry

## 🎯 Pages & Components

### Frontend Pages
- **Home** (`/`) - Dashboard with budget overview
- **Budget** (`/budget`) - View all budget entries
- **Add Entry** (`/add-entry`) - Create new budget entries
- **Edit Entry** (`/edit-entry/:id`) - Edit existing entries
- **About** (`/about`) - About the application

### Components
- **Navbar** - Navigation component
- **Budget Entry Cards** - Display individual entries
- **Forms** - Add/Edit entry forms

## 🗃️ Database Schema

### Budget Entries Table
```sql
- id (Primary Key)
- title (String)
- amount (Decimal)
- type (Enum: 'income', 'expense')
- category (String)
- description (Text)
- date (Date)
- created_at (Timestamp)
- updated_at (Timestamp)
```

## 🔧 Development

### Running Tests
```bash
# Backend tests
cd server
php artisan test

# Frontend tests (if implemented)
cd client
npm test
```

### Building for Production
```bash
# Build frontend
cd client
npm run build

# Optimize backend
cd server
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Achi** - [GitHub Profile](https://github.com/Achi-199)

## 🙏 Acknowledgments

- Built as part of Advanced Web Programming coursework
- React documentation and community
- Laravel documentation and ecosystem
- ELTE University - 4th Semester Assignment

---

For any questions or support, please open an issue in the GitHub repository.