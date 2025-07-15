/*

Instructions

In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

    Create a class named Video. The class should be constructed with the following parameters:
        title (a string)
        uploader (a string, the person who uploaded it)
        time (a number, the duration of the video - in seconds)
    Create a method called watch() which displays a string as follows:
    “uploader parameter watched all time parameter of title parameter!”
    Instantiate a new Video instance and call the watch() method.
    Instantiate a second Video instance with different values.
    Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
    Think of the best data structure to save this information within the array.
    Bonus: Loop through the array to instantiate those instances.

*/
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}

const video1 = new Video("JavaScript OOP Basics", "Alice", 300);
video1.watch();

const video2 = new Video("Learn React Fast", "Bob", 420);
video2.watch();

const videosData = [
  { title: "Intro to CSS", uploader: "Claire", time: 180 },
  { title: "HTML in 10 Minutes", uploader: "Dave", time: 600 },
  { title: "Advanced Python", uploader: "Eve", time: 900 },
  { title: "Linux Commands Crash Course", uploader: "Frank", time: 720 },
  { title: "Docker Explained", uploader: "Grace", time: 480 }
];

const videoInstances = [];

videosData.forEach(data => {
  const video = new Video(data.title, data.uploader, data.time);
  videoInstances.push(video);
  video.watch();
});
