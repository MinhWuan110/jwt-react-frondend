import { useNavigate } from "react-router-dom";
import {useEffect} from "react"

function useAuthCheck() {
  const navigate = useNavigate();
  // kiểm tra người dùng nào đã đăng nhập rồi nêú chưa đăng nhập thì đá ra trang login
  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (!session) {
      navigate("/login");
    }
  }, [navigate]);
}

export default useAuthCheck;
