export const AboutData = [
    {
        heading: '2017-Web Development',
        paragraph: 'There are many variations of passages of Lorem Ipsum available, but the.'
    },
    {
        heading: '2018-Mern Stack ',
        paragraph: 'There are many variations of passages of Lorem Ipsum available, but the.'
    },
    {
        heading: '2015-Front End Devlopment',
        paragraph: 'There are many variations of passages of Lorem Ipsum available, but the.'
    },
    {
        heading: '2015-UI/UX Design',
        paragraph: 'There are many variations of passages of Lorem Ipsum available, but the.'
    },
]



// ekhon amra jehitu jani array er bhitor thekei map korte hoy. tahole object er bhitore map korar upay hocche eta. Ei type er data ke bola hoy complicated api. karon ekta array er moddhe shorboccho 10-15ta object thakte pare. kintu ekta object er bhitore 1000 tar uporeo object thakte pare
const player = {
     name: {
        pName: 'Sakib',
        sName: 'Rakib'
     },
     age: {
        pAge: 35,
     }
}

// Object.values(player).map((item)=>(
//     console.log(item.pName) 
// ))
// ekhane values gula dekhay. eg sakib,rakib,35. ar ekhane values er upore map chalacche



// Object.keys(player).map((item)=>(
//     console.log(item) 
// ))
// ar ekhane properties gulake pabe. eg name, age.ekhane keys gular upore  map challache. jei properties ache


// nested er upore nested thake tahole array use korbo 