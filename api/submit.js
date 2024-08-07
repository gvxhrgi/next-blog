import axios from "axios"

export default async function handler(req, res) {
    const data = req.body
    const sentData = axios.post(data)
    console.log(sentData);
    
  }