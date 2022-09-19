# time.ly
Leaving lines in the dust
Created at Hack the North 2022 

## Inspiration
With the lack of accessible student housing in recent years, demand for public transportation has skyrocketed—including GO Transit buses that depart from McMaster University and head towards destinations in Mississauga and Brampton. Students wait in line for hours on end as buses fill up before they can board, entailing the dreaded wait for the next bus. And so, we were inspired to address this problem with time.ly, a web application that allows passengers to reserve their seats ahead of time, avoid physically standing in long lines, and ultimately encourage use of public transportation by improving its experience.

## What it does
time.ly is a web application that first, allows users to select their needed bus and time of arrival, and thus reserve their seat on that bus if there is a free spot. By eliminating the uncertainty of whether or not they would be able to fit on the bus once they arrive, time.ly saves bus commuters' time and removes the hassle of having to physically wait in a line for indefinite amounts of time.

## How we built it
Initial wireframes incorporating UX/UI design principles were created using Figma. The frontend was built with ReactJS, while the backend was written with Python and deployed with Flask.

## Challenges we ran into
The biggest challenge we faced was implementing the backend in a way that would complement the frontend. Since none of us had prior experience in this area, a lot of time was dedicated to researching and deciding on technologies to use (or not use). We ended up adding a backend component to our web application using Flask, and learning this new skill within hours of the submission deadline was a big endeavour.

## Accomplishments that we're proud of
In addition to creating a polished, functional frontend that fulfilled the initial design constraints we set out with, we're proud of being able to involve a working backend component to our web application, as it was a new feat for us.

## What we learned
We've learned a lot about full stack development and the challenges of getting a frontend and backend to communicate with each other via Flask in an effective and efficient manner. With the original ambition to implicate real life data into the project, we also learned about the difficulties of training a machine learning backend—though our efforts in the task were continuous, the result was ultimately not able to be realized. We further developed skills in problem-solving, whether that be in determining how to best define user needs, breaking down bigger solutions into step-by-step chunks, or writing algorithms centred around optimization.

## What's next for time.ly
The main feature we would aim to implement in time.ly is a machine learning backend that pulls data from cities and routes across the region to predict optimal boarding times for passengers. Another possibility is using a cloud service to deliver live updates and real-time route suggestions. On the frontend, further functionalities such as collecting and storing user inputs, delivering reminder notifications via SMS or Mail APIs, visual representations of bus capacity and seat allocation, and so on. Because of the flexible environment of time.ly, another potential development would be its integration with students' existing PRESTO cards and transit services.
