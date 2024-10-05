const user = {
    username: 'Carl',
    age: 21,
    city: 'Zhytomyr',
    course: 'Front-End Pro',

    getUserInfo: function () {
        console.log(`user name: ${user.username}`);
        console.log(`user age: ${user.age}`);
        console.log(`user city: ${user.city}`);
        console.log(`user course: ${user.course}`);
    }
};

user.getUserInfo()

