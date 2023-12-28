const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const patient = require('./models/patient');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

n
var contactList = [
    {
        name: "Arpan",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "12131321321"
    }
]

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});


app.get('/', function(req, res){


    patient.find({}, function(err, contacts){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return res.render('home',{
            title: "Contact List",
            contact_list: contacts
        });

    })
  
})
app.post('/create-list', function(req, res){
     
    patient.create({
        pname: req.body.pname,
        dname: req.body.dname,
        time: req.body.time
    }, function(err, newContact){
        if(err){console.log('Error in creating a contact!')
            return;}
            console.log('******', newContact);
            return res.redirect('back');
    })
    // console.log(req.body)
    // res.redirect('back');

});

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})


app.get('/delete-list/', function(req, res){
    console.log(req.query);
    let id = req.query.id
    patient.findByIdAndDelete(id,function(err){
        if(err){
            console.log(`error in deleting an object from database`)
            return
        }

    })
    // let contactindex = contactList.findIndex(contact => contact.phone == phone);

    // if(contactindex != -1){
    //     contactList.splice(contactindex, 1);
    // }

    return res.redirect('back');
});

// function dis (){
//     Contact.find({}, function(err, contacts){
//         if(err){
//             console.log("error in fetching contacts from db");
//             return;
//         }
//         // return res.render('home',{
//         //     title: "Contact List",
//         //     contact_list: contacts
//         // });
//         contacts.forEach(element => {
//             console.log(element.createdAt.getHour());
//         });

//     })
// }
// dis();