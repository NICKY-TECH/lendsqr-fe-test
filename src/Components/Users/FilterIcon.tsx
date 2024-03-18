import "../../styles/base.css";
import filter from "../../resources/images/icons/filter-results-button.png";
import { useAppDispatch } from "../../hooks/typedRedux";
import { filterState } from "../../features/preferenceOverlay";

function FilterIcon (){
   const dispatch = useAppDispatch()
   return <img src={filter} className="filter-icon" onClick={()=>{
      dispatch(filterState())
   }}/>
}

export default FilterIcon