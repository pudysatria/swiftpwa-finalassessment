import React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: theme.zIndex.drawer + 3,
    },
}));

function ScrollTop({ maxHeigtToShow = 600 }) {
    const classes = useStyles();
    const [triger, setTriger] = React.useState(false);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const checkScrollTop = () => {
                if (!triger && window.pageYOffset > maxHeigtToShow) {
                    setTriger(true);
                } else if (triger && window.pageYOffset <= maxHeigtToShow) {
                    setTriger(false);
                }
            };
            window.addEventListener('scroll', checkScrollTop);
        }
    }, []);

    const scrollTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <Zoom in={triger}>
            <div onClick={scrollTop} role="presentation" className={classes.root}>
                <Fab color="primary" size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </div>
        </Zoom>
    );
}

export default ScrollTop;
