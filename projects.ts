import React from "@images/react.svg"
import Next from "@images/next.svg"
import Express from "@images/expressjs.svg"
import PostgreSQL from "@images/postgresql.svg"

const projects = {
  "ecomap": {
    "tags": [
      {
        "title": "Maps"
      },
      {
        "title": "Recycling"
      }
    ],
    "usedTechnologies": [
      {
        "name": "React Native",
        "image": React
      },
      {
        "name": "Express.js",
        "image": Express
      },
      {
        "name": "PostgreSQL",
        "image": PostgreSQL
      }
    ]
  },
  "portfolio": {
    "tags": [
      {
        "title": "Personal"
      }
    ],
    "usedTechnologies": [
      {
        "name": "Next.js",
        "image": Next
      },
    ]
  },
}

export default projects;


