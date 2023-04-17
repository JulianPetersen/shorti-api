import LocalNotification from '../models/localNotification'

export const createLocalNotification = async (req,res) => {
    const {date,title,messagge} = req.body
    const newLocalNotification =  new LocalNotification({date,title,messagge})
    const notificationSaved = await newLocalNotification.save();
    res.status(201).json(notificationSaved);
}

export const getLocalNotification = async (req,res) => {
    const notifications = await LocalNotification.find().sort({createdAt: -1})
    res.json(notifications)
}

export const getNotificationsByUser = async (req, res) => {
    const notifications = await LocalNotification.find({user:{$ne: req.params.userId}}).sort({createdAt: -1})
    res.json(notifications); 
}

export const updateReadNotification = async (req,res) => {
    const notification = await LocalNotification.findById({_id:req.body.notificationId})
    notification.user.push(req.body.userId)
    const notificationSaved = await notification.save();
    console.log(notificationSaved)
    res.json(console.log(notificationSaved)
    ); 
}