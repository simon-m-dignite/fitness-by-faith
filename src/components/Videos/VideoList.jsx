import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import Axios from "../../axios";
import Loader from "../Global/Loader";

const VideoList = () => {
  const [workoutVideo, setWorkoutVideo] = useState([])
  const [pageDetails, setPageDetails] = useState({})
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [loading, setLoading] = useState(false)

  const rowsPerPage = 9;


  const getVideos = async (pageNumber = 1, rows = 9) => {
    console.log("🚀 ~ getWorkouts ~ pageNumber: ", pageNumber, "🚀 rows: ",rows)
    try {
      setLoading(true);
      const { data } = await Axios.get(`video/getAll?pagination=true&page=${pageNumber}&pageSize=${rows}`);
      setWorkoutVideo(data?.data?.data);
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
    applyFilter(filter, workoutVideo);
  };

  useEffect(()=>{
    getVideos()
  },[])

  return (
    <div className="w-full mt-6">
      <div className="w-full flex items-center justify-start gap-4">
      <button className={`text-[12px] px-4 py-1 rounded-full ${
                selectedFilter === "All"? "bg-[#64B5AC] text-white" : "bg-gray-200 text-black"
              } font-medium transition-all duration-300`}
              onClick={() => handleFilterClick("All")}
            >
              All
            </button>
            <button
          className={`text-[12px] ${selectedFilter === 'Yoga' ? 'bg-[#64B5AC] text-white' : 'bg-gray-200 text-black'} px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300`}
          onClick={() => handleFilterClick('Yoga')}
        >
          Yoga
        </button>
        <button
          className={`text-[12px] ${selectedFilter === 'Cardio' ? 'bg-[#64B5AC] text-white' : 'bg-gray-200 text-black'} px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300`}
          onClick={() => handleFilterClick('Cardio')}
        >
          Cardio
        </button>
        <button
          className={`text-[12px] ${selectedFilter === 'Lifting' ? 'bg-[#64B5AC] text-white' : 'bg-gray-200 text-black'} px-4 py-1 rounded-full hover:bg-[#64B5AC] hover:text-white font-medium transition-all duration-300`}
          onClick={() => handleFilterClick('Lifting')}
        >
          Lifting
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((video,index)=>(
          <VideoCard key={index} title={video.title} description={video.description} thumbnail={video.thumbnail}/>
        ))}
      </div>
      )}
    </div>
  );
};

export default VideoList;
