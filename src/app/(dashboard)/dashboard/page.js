import DashboardChart from "@/components/dashboard/DashboardChart";
import DashboardDetails from "@/components/dashboard/DashboardDetails";
import Platform from "@/components/dashboard/Platform";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 sm:hidden lg:block w-full platform-side">
                <Platform />
            </div>
            <div className="col-span-12 lg:col-span-8 flex items-center justify-center">
                <DashboardChart />
            </div>
            <div className="col-span-2 sm:hidden lg:block dashboard-details-side">
                <DashboardDetails />
            </div>
        </div>
    )
}

export default Dashboard;