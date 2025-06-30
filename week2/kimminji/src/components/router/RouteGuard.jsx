import { Navigate, useLocation } from "react-router-dom";

// isLoggedIn 값을 props로 받아 처리
const RouteGuard = ({ isLoggedIn, children }) => {
  const location = useLocation();

  if (!isLoggedIn) {
    // 로그인되지 않았으면 /login 으로 리디렉션
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 로그인되었으면 자식 컴포넌트 그대로 렌더링
  return children;
};

export default RouteGuard;
