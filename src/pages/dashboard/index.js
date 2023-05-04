// material-ui
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';

// project import
import OrdersTable from './OrdersTable';
import MainCard from 'components/MainCard';
// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Dashboard</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Button variant="contained" color="success">
                    Download.xlsx
                </Button>
            </Grid>
            {/* row 3 */}
            <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Recent entries</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <OrdersTable />
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default DashboardDefault;
