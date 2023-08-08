const express = require('express')
const cors = require('cors')
const User = require('./config')
const { async } = require('@firebase/util')


const app =  express()
app.use(express.json())
app.use(cors())



app.get('/', async(req,res) => {
    const snapshot = await User.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
    res.send(list)
});

app.get('/room1', async (req, res) => {
    try {
      // Lấy dữ liệu của document "room" trong collection "Sensor"
      const snapshot = await User.doc("Room1").get();
      if (snapshot.exists) {
        const roomData = snapshot.data();
        res.json(roomData);
      } else {
        res.status(404).json({ error: "Document not found" });
      }
    } catch (error) {
      console.error("Error getting document: ", error);
      res.status(500).json({ error: "Server error" });
    }
  });

  app.get('/room2', async (req, res) => {
    try {
      // Lấy dữ liệu của document "room" trong collection "Sensor"
      const snapshot = await User.doc("Room2").get();
      if (snapshot.exists) {
        const roomData = snapshot.data();
        res.json(roomData);
      } else {
        res.status(404).json({ error: "Document not found" });
      }
    } catch (error) {
      console.error("Error getting document: ", error);
      res.status(500).json({ error: "Server error" });
    }
  });

  const Room1 = {
    id : "1",
    Temp : "100",
    Humd: "1000"
  };

app.post('/create', async(req, res)=>{
    const data = req.body;
    // console.log("Data of Users ", data)
    await User.doc("Room1").set(data);
    res.send({msg: "User added"});
})

app.put('/update1', async(req, res) => {
    delete req.body.id;
    const data = req.body;
    await User.doc("Room1").update(data);
    res.send({msg: "Updated"});
});

app.delete('/delete', async(req, res) => {
    const id = req.body.id;
    await User.doc(id).delete();
    res.send({msg: "Deleted"});
});

app.listen(1234, () => console.log("Port 1234"))