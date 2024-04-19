"use client";

import { Col, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";

interface GetItem {
  id: number;
  name: string;
}

const AllBrands: React.FC = () => {
  const [ids, setIds] = useState<number[]>([]);
  const [data, setData] = useState<GetItem[]>([]);

  useEffect(() => {
    const fetchMake = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}core/getAllMake`
        );
        const fetchedData: GetItem[] = await response.json();

        setData(fetchedData);
        const extractedIds = fetchedData.map((item) => item.id);
        setIds(extractedIds);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMake();
  }, []);

  return (
    <div>
      <div>
        <br />
        <span
            style={{
                textAlign: "center",
                color: "ablue",
                fontSize: "2rem",
                fontWeight: "bold",
            }}
        >
          We serve these car brands
          </span>
        <Row gutter={[16, 16]} justify="start">
          {data.map((item, index) => (
            <div key={index} style={{ width: "20%", height: "20%" }}>
              <Col
                key={index}
                //</div>xs={24} sm={12} md={8} lg={6} xl={4}
              >
                <img
                  src={`https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/${item.id}.jpeg`}
                  alt={`Image ${item.id}`}
                />
              </Col>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AllBrands;
