import React from "react";
import Layout from "./Layout";

export const Skeleton = () => {
  return (
    <Layout>
      <div
        className="container-fluid p-4 min-vh-100"
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        }}
      >
        {/* Header Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="text-primary fw-bold mb-0">
                <div className="skeleton" style={{width: '300px', height: '40px'}}></div>
              </h1>
              <div className="skeleton rounded-circle" style={{width: '40px', height: '40px'}}></div>
            </div>
          </div>
        </div>

        {/* Main Content Cards */}
        <div className="row g-4">
          {/* Large Card */}
          <div className="col-lg-12">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <div className="skeleton" style={{width: '250px', height: '24px'}}></div>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="skeleton mb-2" style={{width: '150px', height: '16px'}}></div>
                    <div className="skeleton" style={{width: '100%', height: '38px'}}></div>
                  </div>
                  <div className="col-md-6">
                    <div className="skeleton mb-2" style={{width: '120px', height: '16px'}}></div>
                    <div className="skeleton" style={{width: '100%', height: '38px'}}></div>
                  </div>
                  <div className="col-md-12">
                    <div className="skeleton mb-2" style={{width: '100px', height: '16px'}}></div>
                    <div className="skeleton" style={{width: '100%', height: '80px'}}></div>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-light">
                <div className="d-flex justify-content-end gap-2">
                  <div className="skeleton" style={{width: '100px', height: '38px'}}></div>
                  <div className="skeleton" style={{width: '100px', height: '38px'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Cards */}
          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-header bg-success text-white">
                <div className="skeleton" style={{width: '200px', height: '24px'}}></div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th><div className="skeleton" style={{width: '60px', height: '16px'}}></div></th>
                        <th><div className="skeleton" style={{width: '100px', height: '16px'}}></div></th>
                        <th><div className="skeleton" style={{width: '80px', height: '16px'}}></div></th>
                        <th><div className="skeleton" style={{width: '70px', height: '16px'}}></div></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <tr key={i}>
                          <td><div className="skeleton" style={{width: '30px', height: '16px'}}></div></td>
                          <td><div className="skeleton" style={{width: '120px', height: '16px'}}></div></td>
                          <td><div className="skeleton" style={{width: '60px', height: '16px'}}></div></td>
                          <td><div className="skeleton" style={{width: '50px', height: '16px'}}></div></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-header bg-warning text-dark">
                <div className="skeleton" style={{width: '180px', height: '24px'}}></div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th><div className="skeleton" style={{width: '60px', height: '16px'}}></div></th>
                        <th><div className="skeleton" style={{width: '100px', height: '16px'}}></div></th>
                        <th><div className="skeleton" style={{width: '80px', height: '16px'}}></div></th>
                        <th><div className="skeleton" style={{width: '70px', height: '16px'}}></div></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <tr key={i}>
                          <td><div className="skeleton" style={{width: '30px', height: '16px'}}></div></td>
                          <td><div className="skeleton" style={{width: '120px', height: '16px'}}></div></td>
                          <td><div className="skeleton" style={{width: '60px', height: '16px'}}></div></td>
                          <td><div className="skeleton" style={{width: '50px', height: '16px'}}></div></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Action Card */}
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-info text-white">
                <div className="skeleton" style={{width: '150px', height: '24px'}}></div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <div className="skeleton" style={{width: '150px', height: '45px'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
