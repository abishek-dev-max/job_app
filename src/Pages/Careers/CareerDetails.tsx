import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CareerType } from "./ICareer";
import { error } from "console";


export default function CareerDetails() {
  // const params = useParams();
  const career = useLoaderData() as CareerType;
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary:{career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        fugiat rem, ea quaerat adipisci totam animi similique esse sapiente eius
        vel nulla est ipsam consectetur voluptates itaque sint facere? Illo.
      </div>
    </div>
  );
}
export const CareerDetailsLoader = async ({ params }:any) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) {
    throw Error('could not find error')
  }
  return res.json();
};
