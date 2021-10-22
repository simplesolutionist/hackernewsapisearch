import './NewsFeed.css';

function NewsFeed(props) {
    const classes = 'newsfeed ' + props.className;
    
    return <div className={classes}>{props.children}</div>;
}

export default NewsFeed;

