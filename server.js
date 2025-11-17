// const express = require("express");
// const fs = require("fs");
// const path = require("path");

// const app = express();

// const PORT = 4000;
// const DATA_PATH = path.join(__dirname,"topics.json");

// app.get("/api/topics",(req,res)=>{
//     try {
//         const data = fs.readFileSync(DATA_PATH,"utf8");
//         const topics = JSON.parse(data);

//         let{search, sort} = req.query;
//         //valid search
//         if (!search || search.trim() === "") {
//             return res.status(400).json({
//                 error:"Invalid Query: search parameter is required."
//             })
//         }

//         search=search.toLowerCase();

//         //filter
//         let filtered = topics.filter((topic) =>
//         topic.name.toLowerCase().includes(search)
//         );

//         //sorting
//         if (sort && sort.toLowerCase() === "name") {
//             filtered.sort((a,b) => a.name.localeCompare(b.name));
//         }
//         return res.status(200).json(filtered);
//     } catch (error) {
//         console.error("Server Error:",error);
//         return res.status(500).json({
//             error: "Internal Server Error"
//         });
//     }
// });

// app.listen(PORT,(()=>{
//     console.log(`Server running on ${PORT}`)
// }))


const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 4000;
const DATA_PATH = path.join(__dirname, "topics.json");

app.get("/api/topics", (req, res) => {
    try {
        const data = fs.readFileSync(DATA_PATH, "utf8");
        const topics = JSON.parse(data);

        let { search, sort } = req.query;

        let filtered = topics;

        // Optional search filter
        if (search && search.trim() !== "") {
            search = search.toLowerCase();
            filtered = topics.filter(topic =>
                topic.name.toLowerCase().includes(search)
            );
        }

        // Sorting
        if (sort && sort.toLowerCase() === "name") {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }

        return res.status(200).json(filtered);

    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
