import React, { Fragment, useEffect, useState } from "react";
import MealCard from "../components/MealPlans/MealCard";
import { Link } from "react-router-dom";
import { styles } from "../styles/styles";
import Axios from "../axios";
import Loader from "../components/Global/Loader";
import Pagination from "../components/Global/Pagination";

const MealPlans = () => {
  const [mealData, setMealData] = useState([])
  const [pageDetails, setPageDetails] = useState({})
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [loading, setLoading] = useState(false)

  const rowsPerPage = 10;


  const getMeals = async (pageNumber = 1, rows = 10) => {
    console.log("🚀 ~ getWorkouts ~ pageNumber: ", pageNumber, "🚀 rows: ",rows)
    try {
      setLoading(true);
      const { data } = await Axios.get(`meal/getAll?pagination=true&page=${pageNumber}&pageSize=${rows}`);
      setMealData(data?.data?.data);
      console.log("🚀 ~ getVideos ~ data:", data?.data)
      setPageDetails(data?.data?.pageDetails);
      applyFilter(selectedFilter, data?.data?.data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilter = (filter, data) => {
    if (filter === 'All') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(item => item.category.toLowerCase() === filter.toLowerCase()));
    }
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    applyFilter(filter, mealData);
  };

  useEffect(()=>{
    getMeals()
  },[])

  return (
    <div className="flex flex-col gap-3 min-h-screen">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl font-semibold">Meal Plans</h1>
        <Link
          to="/create-meal-plan"
          className={`${styles.bgColor} text-white text-xs font-medium px-4 py-3 rounded-xl`}
        >
          Create Meal Plan
        </Link>
      </div>
      <div className="w-full flex items-center justify-start gap-4">
        <div className="w-full flex items-center justify-start gap-4"> 
          <button className={`text-[12px] px-4 py-1 rounded-full ${
                selectedFilter === "All"? "bg-[#64B5AC] text-white" : "bg-gray-200 text-black"
              } font-medium transition-all duration-300`}
              onClick={() => handleFilterClick("All")}
            >
              All
          </button>
          <button className={`text-[12px] ${selectedFilter === 'HighProtein' ? 'bg-[#64B5AC] text-white' : 'bg-gray-200 text-black'} px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300`}
            onClick={() => handleFilterClick('HighProtein')}>
              Hight Protein
          </button>
          <button className={`text-[12px] ${selectedFilter === 'LowCarbs' ? 'bg-[#64B5AC] text-white' : 'bg-gray-200 text-black'} px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300`}
            onClick={() => handleFilterClick('LowCarbs')}>
              Low Carbs
          </button>
          <button className={`text-[12px] ${selectedFilter === 'HighCarbs' ? 'bg-[#64B5AC] text-white' : 'bg-gray-200 text-black'} px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300`}
            onClick={() => handleFilterClick('HighCarbs')}>
              High Carbs
          </button>
          <button className={`text-[12px] ${selectedFilter === 'Vegan' ? 'bg-[#64B5AC] text-white' : 'bg-gray-200 text-black'} px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300`}
            onClick={() => handleFilterClick('Vegan')}>
              Vegan
          </button>
        </div>
      </div>
      {loading ? (
        <Loader/>
      ) : (
        <Fragment>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 pt-3">
        {filteredData.map((meal, index)=>(
          <MealCard key={index} id={meal._id} title={meal.title} instructions={meal.instructions} numServing={meal.numServing} prepTime={meal.prepTime} servingSize={meal.servingSize} url={meal.url}/>
        ))}
      </div>
      <div className="w-full flex justify-center mt-4">
        <Pagination page={pageDetails?.page} totalPages={pageDetails.pageCount} rowsPerPage={pageDetails.pageSize} onPageChange={getMeals}/>
      </div>
      </Fragment>
      )}
    </div>
  );
};

export default MealPlans;
