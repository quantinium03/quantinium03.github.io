---
title: Week 3
description: Week 3 progress report
pubDate: September 20, 2024
---

- Started to learn backend development. Need it for my project as fafo stuff wasnt really working as i didnt know what i should find. Just gotta sit down and learn.
- Learned data modelling. im <a href="https://plantillasdememes.com/img/plantillas/conspiracy-charlie01629169812.jpg" class="text-[#fe8019] font-bold no-underline hover:underline"> him</a>
- Did some error handling of stuff. I kinda like how go does these things. try/catch doesnt feel good to write. where are my nils.
- implemented jwt and password hashing. I have done bcrypt hashing in c++ before. Gonna learn how bcrypt algorithm actually works.
- Learned about multer. My server can handle file uploads.
- reviewed back different http methods and codes.
- Wrote some routes , middlewares, controllers and also more schema just for learning.
- Shared fresh cookies with some refresh tokens and access tokens.
- Started using postman after just rawdogging curl commands for everything for months. idk i dont like using postman(just dont like opening another application for just doing curl). manual curl is kinda fun.
- Started to learn mongo/mango. cool thing i guess.
- Learned to write pipelines in mongoose.
- Started to make the backend for my project.
- Just drew all the tables data and integrated sqlite with my server.
- Wrote the route for user registration. Implemented JWT for authentication in my project.
- Wrote the routes and function for handling the movies that the user stores. When the user adds a file and presses the refresh button on the frontend, all the info related to the stuff is added to the database.
- Learning about learning live-transcoding of video to be streamed to the user using hls. Thought of a way to prevent collisions of segments when the user demands the video from a certain timestamp as it always create a new ffmpeg process. The new ffmpeg process will create a segment that named segment_%d.ts and it will always start with 0 thus creating a collision when a new process is created. The way to prevent is just append the time when the user requested the segment to the segment name. voila its fixed.
- Changed the daily report to weekly report as i couldn't get time to do this every night. So its a weekly thing now and its gonna be a long read from now on.
