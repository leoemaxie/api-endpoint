const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const { slack_name, track } = req.query
    const response = {
        slack_name,
        current_day: new Date().toLocaleDateString('en-US', {weekday: 'long'}),
        utc_time: new Date().toISOString(),
        track,
        github_repo_url: "https://github.com/leoemaxie/api-endpoint",
        github_file_url: "https://github.com/leoemaxie/api-endpoint/blob/main/api.js",
        status_code: 200
    }
    res.json(response);
});

app.listen(port, () => console.log(`Serving is running at ${port}`));
