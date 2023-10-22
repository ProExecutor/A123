const { exec } = require('child_process');

let cmd = 'docker run -it -p 7860:7860 --platform=linux/amd64 --gpus all registry.hf.space/ap123-illusiondiffusion:gpu-8e6c97d python app.py';

exec(cmd, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
