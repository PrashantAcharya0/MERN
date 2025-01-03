import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = ({ isPending }) => {
  return (
    <div>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={isPending}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
    </div>
  );
};

export default Loader;
