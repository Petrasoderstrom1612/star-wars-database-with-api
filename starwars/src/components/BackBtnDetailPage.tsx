import { useNavigate } from "react-router-dom";

const BackBtnDetailPage = () => {      
const navigate = useNavigate();
  return (
    <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
      &larr; Back
    </button>
  )
}

export default BackBtnDetailPage