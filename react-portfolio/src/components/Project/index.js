import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

// import 
// import 
// import 
// import 
// import 

function Project(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: '#7389ae',
        },
        gridList: {
            width: '75%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
        title: {
            color: '#7389ae',
        },
        icon: {
            color: '#7389ae',
            '&:hover': {
                color: '#1d3461',
            }
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.6) 100%)',
        }
    }));

    const classes = useStyles();

    const getGridListHeight = () => {
        if (isWidthUp('md', props.width)) {
            return 350;
        }
    
        if (isWidthUp('sm', props.width)) {
            return 275;
        }
    
        if (isWidthUp('xs', props.width)) {
            return 350;
        }
    
        return 1;
    }

    const getGridListCols = (project) => {
        if (isWidthUp('sm', props.width)) {
            return project.cols;
        }
    
        if (isWidthUp('xs', props.width)) {
            return 3;
        }
    
        return 1;
    }

    const projectData = [
        {
            
            title: 'Work-Day-Scheduler',
            gitLink: 'https://github.com/diegorodd/Work-Day-Scheduler',
            cols: 2,
        },
        {
            
            title: 'Module3java',
            description: 'javascript',
            gitLink: 'https://github.com/diegorodd/Module3java',
            cols: 1,
        },
        {
            
            title: 'note-taker',
            description: 'Express / Sequelize / Handlebars.js',
            gitLink: 'https://github.com/diegorodd/note-taker',
            cols: 1,
        },
        {
            
            title: 'Quiz-App',
            description: 'HTML / CSS / JavaScript',
            gitLink: 'https://github.com/diegorodd/Quiz-App',
            cols: 1,
        },
    ];

    return (
        <div className={classes.root}>
            <GridList cellHeight={getGridListHeight()} className={classes.gridList} cols={3} spacing={10}>
            {projectData.map((project) => (
                <GridListTile className={classes.gridList} key={project.title} cols={getGridListCols(project)}>
                    <img src={project.img} alt={project.title} />
                    <GridListTileBar 
                        title={<a href={project.deployedLink} target="_blank" rel="noreferrer">{project.title}</a>}
                        subtitle={<span>{project.description}</span>}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                            subtitle: classes.title,
                        }}
                        actionIcon={
                            <IconButton aria-label={`${project.title} GitHub`} onClick={() => window.open(project.gitLink, "_blank")}>
                                <GitHubIcon className={classes.icon} />
                            </IconButton>
                        }
                    />
                </GridListTile>
            ))}
            </GridList>
        </div>
    );
}

export default withWidth()(Project);