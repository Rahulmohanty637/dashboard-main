import React from 'react'

function ProjectCard ({ title, creationTime }) {
  return (
    <div className="border border-gray-300 p-4 rounded">
    <h3 className="font-bold">{title}</h3>
    <p>Creation Time: {creationTime}</p>
    <p>Unconnected Device</p>
  </div>
  )
}

export default ProjectCard
