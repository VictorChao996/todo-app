import * as githubPages from 'gh-pages';

const dist = './frontend/dist';


githubPages.publish(dist, {
    branch: 'gh-pages',
    repo: 'https://github.com/VictorChao996/todo-app.git'
}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Published');
    }
});