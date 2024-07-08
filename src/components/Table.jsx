"use client";
import { React, useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@assets/css/font-awesome.min.css";

const Table = ({ columns, data }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.accessor}>
                {column.accessor === "name" ? (
                  <div className="d-flex align-items-center">
                    <span>{row[column.accessor]}</span>
                  </div>
                ) : column.accessor === "actions" ? (
                  <button className="btn btn-link p-0">...</button>
                ) : (
                  row[column.accessor]
                )}
              </td>
            ))}
            <td>
              <button className="btn btn-primary btn-sm">
                envoyer un message
              </button>
            </td>{" "}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
