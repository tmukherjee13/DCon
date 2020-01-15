import Dashboard from "./views/Dashboard";

// import BlankPage from './pages/ExtraPages/pages-blank';

// import Pageslogin from './pages/Auth/Login';
// import Logout from './pages/Auth/Logout';
// import Pagesregister from './pages/Auth/Register';
// import ForgetPassword from './pages/Auth/ForgetPassword';
// import ResetPassword from './pages/Auth/ResetPassword';

const routes = [
  // public Routes
  // {path: '/login', component: Pageslogin, ispublic: true},
  // {path: '/logout', component: Logout, ispublic: true},
  // {path: '/register', component: Pagesregister, ispublic: true},
  // {path: '/forget-password', component: ForgetPassword, ispublic: true},
  // {path: '/reset-password', component: ResetPassword, ispublic: true},

  // { path: '/pages-blank', component: BlankPage },

  // Dashnoard
  { path: "/", component: Dashboard }
  // {path: '/', component: Pageslogin, ispublic: true},
];

export default routes;
