import { useState, useEffect } from 'react';

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  //FILL HERE LOGIC TO SET THE BUILDING DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../data/building.json');
        const jsonData = await response.json();
        console.log(jsonData); // logs the data to the console
        setBuildingData(jsonData);
      } catch (error) {
        console.log(error, "error"); // logs the error message to the 
      }
    };
    fetchData();
  }, []);


  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    //FILL HERE
  }
  const getListOfActivities = ():string[]=>{
    //FILL HERE
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
