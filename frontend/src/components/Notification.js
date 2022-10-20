import '../index.css';

const Notification = ({data, onClick}) => {
    return (
    <div onClick={onClick} className='flex items-center w-72 p-2 border-b border-t border-gray-300'>
        <img src={"http://127.0.0.1:3000/img?id="+data[3]._id} className=" w-9 h-9 mr-4 rounded-full"/>
        <div className='flex flex-col'>
            <p className='text-lg'>{data[2].company_name}</p>
            <p className='text-sm'>{"Just uploaded a new job for " + data[1].job_title}</p>
        </div>
    </div>
    )
}
Notification.defaultProps = {
    data:[
        {
            "_id": "634c187e1ba976c045825975",
            "company": "634afc8cc42294e967f022c9",
            "job": "634c187e1ba976c045825970",
            "read": 0,
            "job_seeker": "634ad724f610b13a3c8036e2",
            "__v": 0
        },
        {
            "_id": "634c187e1ba976c045825970",
            "company": "634afc8cc42294e967f022c9",
            "job_title": "Title",
            "Date": "2022-10-16T14:43:10.807Z",
            "work_time": "Full time",
            "requirements": "requirements",
            "description": "description",
            "location": "location",
            "__v": 0
        },
        {
            "_id": "634afc8cc42294e967f022c9",
            "jobs": [
                "634afcacc42294e967f022d1",
                "634c1229b2d673fc44959cf6",
                "634c122cb2d673fc44959cfd",
                "634c123bb2d673fc44959d04",
                "634c13109ef81d815a2e5eac",
                "634c13109ef81d815a2e5eb3",
                "634c13119ef81d815a2e5eba",
                "634c13119ef81d815a2e5ec1",
                "634c13129ef81d815a2e5ec8",
                "634c1827c52a0246c6a03749",
                "634c1841725249d04870916c",
                "634c187e1ba976c045825970"
            ],
            "company_name": "Comapany 1",
            "industry": "Industry x",
            "company_size": "341",
            "hq": "Head quarters location",
            "website": "www.google.com",
            "locations": "1",
            "user": "634afc8cc42294e967f022c6",
            "__v": 12
        },
        {
            "_id": "634afc8cc42294e967f022c6",
            "email": "cmp1@email.com",
            "user_type": "634ad35788dd8280a336e38a",
            "__v": 0,
            "image": "images/image1665863684134.png"
        }
    ]
  };
  
export default Notification;