import Layout from "../components/Global/Layout";
import Chat from "../pages/Chat";
import CreateMealPlan from "../pages/CreateMealPlan";
import CreateWorkout from "../pages/CreateWorkout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import MealDetails from "../pages/MealDetails";
import MealDetailsPage from "../pages/MealDetailsPage";
import MealPlans from "../pages/MealPlans";
import Notifications from "../pages/Notifications";
import ResetPassword from "../pages/ResetPassword";
import Revenue from "../pages/Revenue";
import UserDetails from "../pages/UserDetails";
import Users from "../pages/Users";
import VerifyEmail from "../pages/VerifyEmail";
import VerifyOtp from "../pages/VerifyOtp";
import WorkoutDetails from "../pages/WorkoutDetails";
import WorkoutEdit from "../pages/WorkoutEdit";
import WorkoutPlans from "../pages/WorkoutPlans";
import Auth from "./Auth";

export const routes = [
  {
    title: "Initial Page",
    url: "/",
    page: <Auth />,
  },
  {
    title: "Dashboard Page",
    url: "/dashboard",
    page: <Layout pages={<Dashboard />} />,
  },
  {
    title: "Dashboard Page",
    url: "/workout-plans",
    page: <Layout pages={<WorkoutPlans />} />,
  },
  {
    title: "Create Workout Page",
    url: "/create-workout",
    page: <Layout pages={<CreateWorkout />} />,
  },
  {
    title: "Dashboard Page",
    url: "/workout/1234",
    page: <Layout pages={<WorkoutDetails />} />,
  },
  {
    title: "Dashboard Page",
    url: "/update-workout/1234",
    page: <Layout pages={<WorkoutEdit />} />,
  },
  {
    title: "Dashboard Page",
    url: "/meal-plans",
    page: <Layout pages={<MealPlans />} />,
  },
  {
    title: "Create Meal Plan Page",
    url: "/create-meal-plan",
    page: <Layout pages={<CreateMealPlan />} />,
  },
  {
    title: "Meal Plan Details Page",
    url: "/meal/1234",
    page: <Layout pages={<MealDetailsPage />} />,
  },
  {
    title: "Dashboard Page",
    url: "/users",
    page: <Layout pages={<Users />} />,
  },
  {
    title: "Dashboard Page",
    url: "/user/1234",
    page: <Layout pages={<UserDetails />} />,
  },
  {
    title: "Dashboard Page",
    url: "/revenue",
    page: <Layout pages={<Revenue />} />,
  },
  {
    title: "Dashboard Page",
    url: "/push-notifications",
    page: <Layout pages={<Notifications />} />,
  },
  {
    title: "Help & Support Page",
    url: "/help-and-support",
    page: <Layout pages={<Chat />} />,
  },
  {
    title: "Dashboard Page",
    url: "/login",
    page: <Login />,
  },
  {
    title: "Verify Email Page",
    url: "/verify-email",
    page: <VerifyEmail />,
  },
  {
    title: "Verify OTP Page",
    url: "/verify-otp",
    page: <VerifyOtp />,
  },
  {
    title: "Reset Password Page",
    url: "/reset-password",
    page: <ResetPassword />,
  },
];
