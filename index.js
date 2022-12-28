const ffmpeg = require('fluent-ffmpeg')
const probe = require('ffmpeg-probe');
//add path as url for testing
var path= "C:/Users/noeli/Downloads/chau.mp4";
//start server
var express = require('express');
var app = express();
var server = app.listen(3000, listening);
function listening() {
    console.log("listening...");
}

// (async () => {
//     // const info = await probe(path)
//     // //get pixels    
//     // var pixels = info.streams[0].width * info.streams[0].height;
//     // console.log(pixels);
//     // //get duration
//     // var duration = info.format.duration;
//     // console.log(duration);
//     // //get fps
//     // var fps = info.streams[0].r_frame_rate;
//     // console.log(fps);
//     // //get bitrate
//     // var bitrate = info.streams[0].bit_rate;
//     // console.log(bitrate);
//     // //get codec
//     // var codec = info.streams[0].codec_name;
//     // console.log(codec);
//     // //get audio codec
//     // var audioCodec = info.streams[1].codec_name;
//     // console.log(audioCodec);
//     // //get audio bitrate
//     // var audioBitrate = info.streams[1].bit_rate;
//     // console.log(audioBitrate);
//     // //get audio sample rate

//     // var audioSampleRate = info.streams[1].sample_rate;
//     // console.log(audioSampleRate);
//     // //get audio channels
//     // var audioChannels = info.streams[1].channels;
//     // console.log(audioChannels);
//     // //get audio duration
//     // var audioDuration = info.streams[1].duration;
//     // console.log(audioDuration);
//     // //get audio codec
//     // var audioCodec = info.streams[1].codec_name;
//     // console.log(audioCodec);
//     // //get audio bitrate
//     // var audioBitrate = info.streams[1].bit_rate;
//     // console.log(audioBitrate);
//     // console.log(info)
//     // }
//     await console.log("hello");

//     )();



