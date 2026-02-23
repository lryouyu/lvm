import React, { useEffect, useState } from "react";
import { VersionTable, VersionItem } from "@/pages/components/VersionTable";
import mockData from '@/data/t.json'

export const PythonPage = () => {
  const [data, setData] = useState<VersionItem[]>([]);

  useEffect(()=>{
    setData(mockData)
    
  })
  const handleSearch = (value: string) => {
    console.log("search:", value);
    // 这里可以调用接口
  };

  const handleInstallToggle = (record: VersionItem) => {
    console.log("install toggle:", record);
  };

  const handleUseToggle = (record: VersionItem) => {
    console.log("use toggle:", record);
  };

  return (
    <VersionTable
      data={data}
      onSearch={handleSearch}
      onInstallToggle={handleInstallToggle}
      onUseToggle={handleUseToggle}
    />
  );
};