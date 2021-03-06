import "./Dashboard.css";


const Dashboard = () => {
    
    return (
        <div className="dashboard-component">
            <h1 className="dashboard-title"> Welcome to your Valve Management Platform </h1>
            <p className="dashboard-para">Features of your valve managment platform are - </p> 
                <ol>
                    <li> An overview of all your valve maintenance activity.</li>
                    <li> A portal to manage maintenance history </li>
                    <li> An analytics engine that provides maintenance recommendations.</li>
                </ol>
            
        </div>
    );
};



export default Dashboard;