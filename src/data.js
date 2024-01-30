import { useNavigate } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import { useGridApi } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Order ID", width: 100 },
  { field: "Weight", headerName: "Weight", width: 70 },
  { field: "Volume", headerName: "Volume", width: 70 },
  {
    field: "Supplier_Name",
    headerName: "Supplier Name",
    width: 150,
  },
  {
    field: "Product_Type",
    headerName: "Product Type",
    width: 100,
  },
  {
    field: "Source",
    headerName: "Source",
    width: 120,
  },
  {
    field: "Destination",
    headerName: "Destination",
    width: 120,
  },
  {
    field: "ETD",
    headerName: "ETD",
    width: 100,
  },
  {
    field: "ETA",
    headerName: "ETA",
    width: 100,
  },
  {
    field: "Mode_of_Transport",
    headerName: "Mode of Transport",
    width: 150,
  },
  {
    field: "Preferred_Carrier",
    headerName: "Preferred Carrier",
    width: 120,
  },
  {
    field: "STATUS",
    headerName: "STATUS",
    width: 120,
  },
  {
    field: "SHIPMENT_ID",
    headerName: "SHIPMENT ID",
    width: 150,
  },
];

const columnShipment = [
  {
    field: "id",
    headerName: "SHIPMENT ID",
    width: 300,
  },
  {
    field: "Destination",
    headerName: "Destination",
    width: 120,
  },
  {
    field: "ETA",
    headerName: "ETA",
    width: 100,
  },
  {
    field: "Mode_of_Transport",
    headerName: "Mode of Transport",
    width: 150,
  },
  {
    field: "Preferred_Carrier",
    headerName: "Preferred Carrier",
    width: 120,
  },
  {
    field: "Assigned_Carrier",
    headerName: "Assigned Carrier",
    width: 120,
  },
  {
    field: "STATUS",
    headerName: "STATUS",
    width: 120,
  },

  {
    field: "Bidding_Option",
    headerName: "Action",
    width: 120,
    renderCell: (params) => {
      return (
        <ButtonComponent row={params} allRows={params.api.getAllRowIds()} />
      );
    },
  },
];

const rows = [
  {
    id: 1,
    Weight: 150,
    Volume: 2.5,
    Supplier_Name: "ABC Suppliers",
    Product_Type: "Electronics",
    Source: "Warehouse A",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "",
    Preferred_Carrier: "UPS",
    ETD: "2024-02-01",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 2,
    Weight: 200,
    Volume: 4.0,
    Supplier_Name: "XYZ Manufacturing",
    Product_Type: "Apparel",
    Source: "Factory B",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "",
    Preferred_Carrier: "",

    ETD: "2024-02-05",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 3,
    Weight: 150,
    Volume: 2.5,
    Supplier_Name: "ABC Logistics",
    Product_Type: "Electronics",
    Source: "Warehouse A",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "",
    Preferred_Carrier: "",

    ETD: "2024-03-12",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 4,
    Weight: 180,
    Volume: 3.8,
    Supplier_Name: "LMN Distributors",
    Product_Type: "Furniture",
    Source: "Warehouse C",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "",
    Preferred_Carrier: "",

    ETD: "2024-03-10",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 5,
    Weight: 160,
    Volume: 3.8,
    Supplier_Name: "LMN Distributors",
    Product_Type: "Furniture",
    Source: "Warehouse A",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "",
    Preferred_Carrier: "",
    ETD: "2024-03-10",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 100,
    Weight: 180,
    Volume: 3.8,
    Supplier_Name: "LMN Distributors",
    Product_Type: "Furniture",
    Source: "Warehouse C",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "",
    Preferred_Carrier: "",
    ETD: "2024-03-10",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },

  {
    id: 101,
    Weight: 150,
    Volume: 2.5,
    Supplier_Name: "ABC Logistics",
    Product_Type: "Electronics",
    Source: "Warehouse A",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "",
    Preferred_Carrier: "",
    ETD: "2024-03-12",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 102,
    Weight: 200,
    Volume: 4.2,
    Supplier_Name: "XYZ Manufacturers",
    Product_Type: "Clothing",
    Source: "Warehouse B",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "",
    Preferred_Carrier: "",
    ETD: "2024-03-15",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 103,
    Weight: 120,
    Volume: 1.8,
    Supplier_Name: "PQR Suppliers",
    Product_Type: "Books",
    Source: "Warehouse D",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "",
    Preferred_Carrier: "",
    ETD: "2024-03-18",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 104,
    Weight: 160,
    Volume: 3.0,
    Supplier_Name: "LMN Distributors",
    Product_Type: "Appliances",
    Source: "Warehouse C",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "",
    Preferred_Carrier: "",
    ETD: "2024-03-21",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 105,
    Weight: 190,
    Volume: 3.5,
    Supplier_Name: "ABC Logistics",
    Product_Type: "Toys",
    Source: "Warehouse A",
    Destination: "Customer U",
    ETA: "2024-06-11",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    ETD: "2024-03-24",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 106,
    Weight: 140,
    Volume: 2.2,
    Supplier_Name: "XYZ Manufacturers",
    Product_Type: "Electronics",
    Source: "Warehouse B",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    ETD: "2024-03-27",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 107,
    Weight: 170,
    Volume: 3.2,
    Supplier_Name: "PQR Suppliers",
    Product_Type: "Furniture",
    Source: "Warehouse D",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    ETD: "2024-03-30",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 108,
    Weight: 130,
    Volume: 2.0,
    Supplier_Name: "LMN Distributors",
    Product_Type: "Clothing",
    Source: "Warehouse C",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "",
    Preferred_Carrier: "UPS",
    ETD: "2024-04-02",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 109,
    Weight: 180,
    Volume: 3.8,
    Supplier_Name: "ABC Logistics",
    Product_Type: "Books",
    Source: "Warehouse A",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    ETD: "2024-04-05",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 110,
    Weight: 160,
    Volume: 2.5,
    Supplier_Name: "XYZ Suppliers",
    Product_Type: "Electronics",
    Source: "Warehouse B",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    ETD: "2024-04-18",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 111,
    Weight: 130,
    Volume: 2.0,
    Supplier_Name: "PQR Distributors",
    Product_Type: "Clothing",
    Source: "Warehouse D",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    ETD: "2024-04-21",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 112,
    Weight: 180,
    Volume: 3.8,
    Supplier_Name: "LMN Manufacturers",
    Product_Type: "Furniture",
    Source: "Warehouse C",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    ETD: "2024-04-24",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 113,
    Weight: 150,
    Volume: 2.2,
    Supplier_Name: "ABC Logistics",
    Product_Type: "Toys",
    Source: "Warehouse A",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    ETD: "2024-04-27",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 114,
    Weight: 200,
    Volume: 4.0,
    Supplier_Name: "XYZ Suppliers",
    Product_Type: "Books",
    Source: "Warehouse B",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    ETD: "2024-05-01",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 115,
    Weight: 170,
    Volume: 3.2,
    Supplier_Name: "PQR Distributors",
    Product_Type: "Electronics",
    Source: "Warehouse D",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    ETD: "2024-05-04",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 116,
    Weight: 140,
    Volume: 2.3,
    Supplier_Name: "LMN Manufacturers",
    Product_Type: "Furniture",
    Source: "Warehouse C",
    Destination: "Customer L",
    ETA: "2024-06-11",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    ETD: "2024-05-07",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 117,
    Weight: 190,
    Volume: 3.5,
    Supplier_Name: "ABC Logistics",
    Product_Type: "Clothing",
    Source: "Warehouse A",
    Destination: "Customer E",
    ETD: "2024-05-10",
    ETA: "2024-05-20",
    Mode_of_Transport: "AIR",
    Preferred_Carrier: "DHL",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 118,
    Weight: 120,
    Volume: 1.8,
    Supplier_Name: "XYZ Suppliers",
    Product_Type: "Books",
    Source: "Warehouse B",
    Destination: "Customer D",
    ETD: "2024-05-13",
    ETA: "2024-05-23",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 119,
    Weight: 160,
    Volume: 2.7,
    Supplier_Name: "PQR Distributors",
    Product_Type: "Toys",
    Source: "Warehouse D",
    Destination: "Customer C",
    ETD: "2024-05-16",
    ETA: "2024-05-26",
    Mode_of_Transport: "OCEAN",
    Preferred_Carrier: "FedEx",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 130,
    Weight: 170,
    Volume: 3.2,
    Supplier_Name: "XYZ Distributors",
    Product_Type: "Electronics",
    Source: "Warehouse B",
    Destination: "Customer L",
    ETD: "2024-06-01",
    ETA: "2024-06-11",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 131,
    Weight: 140,
    Volume: 2.3,
    Supplier_Name: "LMN Manufacturers",
    Product_Type: "Furniture",
    Source: "Warehouse C",
    Destination: "Customer K",
    ETD: "2024-06-04",
    ETA: "2024-06-14",
    Mode_of_Transport: "OCEAN",
    Preferred_Carrier: "FedEx",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 132,
    Weight: 190,
    Volume: 3.5,
    Supplier_Name: "ABC Logistics",
    Product_Type: "Clothing",
    Source: "Warehouse A",
    Destination: "Customer J",
    ETD: "2024-06-07",
    ETA: "2024-06-17",
    Mode_of_Transport: "AIR",
    Preferred_Carrier: "DHL",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 133,
    Weight: 120,
    Volume: 1.8,
    Supplier_Name: "PQR Distributors",
    Product_Type: "Books",
    Source: "Warehouse D",
    Destination: "Customer I",
    ETD: "2024-06-10",
    ETA: "2024-06-20",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 134,
    Weight: 160,
    Volume: 2.7,
    Supplier_Name: "XYZ Suppliers",
    Product_Type: "Toys",
    Source: "Warehouse B",
    Destination: "Customer H",
    ETD: "2024-06-13",
    ETA: "2024-06-23",
    Mode_of_Transport: "OCEAN",
    Preferred_Carrier: "FedEx",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 135,
    Weight: 150,
    Volume: 2.2,
    Supplier_Name: "LMN Manufacturers",
    Product_Type: "Electronics",
    Source: "Warehouse C",
    Destination: "Customer G",
    ETD: "2024-06-16",
    ETA: "2024-06-26",
    Mode_of_Transport: "AIR",
    Preferred_Carrier: "DHL",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 136,
    Weight: 200,
    Volume: 4.0,
    Supplier_Name: "ABC Logistics",
    Product_Type: "Furniture",
    Source: "Warehouse A",
    Destination: "Customer F",
    ETD: "2024-06-19",
    ETA: "2024-06-29",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 137,
    Weight: 130,
    Volume: 2.0,
    Supplier_Name: "PQR Suppliers",
    Product_Type: "Clothing",
    Source: "Warehouse D",
    Destination: "Customer E",
    ETD: "2024-06-22",
    ETA: "2024-07-02",
    Mode_of_Transport: "OCEAN",
    Preferred_Carrier: "FedEx",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 138,
    Weight: 180,
    Volume: 3.8,
    Supplier_Name: "XYZ Distributors",
    Product_Type: "Books",
    Source: "Warehouse B",
    Destination: "Customer D",
    ETD: "2024-06-25",
    ETA: "2024-07-05",
    Mode_of_Transport: "AIR",
    Preferred_Carrier: "DHL",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 139,
    Weight: 170,
    Volume: 3.2,
    Supplier_Name: "LMN Manufacturers",
    Product_Type: "Toys",
    Source: "Warehouse C",
    Destination: "Customer C",
    ETD: "2024-06-28",
    ETA: "2024-07-08",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 140,
    Weight: 160,
    Volume: 2.5,
    Supplier_Name: "PQR Distributors",
    Product_Type: "Electronics",
    Source: "Warehouse D",
    Destination: "Customer L",
    ETD: "2024-07-11",
    ETA: "2024-07-21",
    Mode_of_Transport: "OCEAN",
    Preferred_Carrier: "FedEx",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 141,
    Weight: 130,
    Volume: 2.0,
    Supplier_Name: "XYZ Manufacturers",
    Product_Type: "Furniture",
    Source: "Warehouse B",
    Destination: "Customer K",
    ETD: "2024-07-14",
    ETA: "2024-07-24",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 142,
    Weight: 180,
    Volume: 3.8,
    Supplier_Name: "LMN Logistics",
    Product_Type: "Clothing",
    Source: "Warehouse C",
    Destination: "Customer J",
    ETD: "2024-07-17",
    ETA: "2024-07-27",
    Mode_of_Transport: "AIR",
    Preferred_Carrier: "DHL",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 143,
    Weight: 150,
    Volume: 2.2,
    Supplier_Name: "ABC Distributors",
    Product_Type: "Books",
    Source: "Warehouse A",
    Destination: "Customer I",
    ETD: "2024-07-20",
    ETA: "2024-07-30",
    Mode_of_Transport: "OCEAN",
    Preferred_Carrier: "FedEx",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 144,
    Weight: 200,
    Volume: 4.0,
    Supplier_Name: "PQR Logistics",
    Product_Type: "Toys",
    Source: "Warehouse D",
    Destination: "Customer H",
    ETD: "2024-07-23",
    ETA: "2024-08-02",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 145,
    Weight: 170,
    Volume: 3.2,
    Supplier_Name: "XYZ Manufacturers",
    Product_Type: "Electronics",
    Source: "Warehouse B",
    Destination: "Customer G",
    ETD: "2024-07-26",
    ETA: "2024-08-05",
    Mode_of_Transport: "AIR",
    Preferred_Carrier: "DHL",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 146,
    Weight: 140,
    Volume: 2.3,
    Supplier_Name: "LMN Distributors",
    Product_Type: "Furniture",
    Source: "Warehouse C",
    Destination: "Customer F",
    ETD: "2024-07-29",
    ETA: "2024-08-08",
    Mode_of_Transport: "OCEAN",
    Preferred_Carrier: "FedEx",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 147,
    Weight: 190,
    Volume: 3.5,
    Supplier_Name: "ABC Logistics",
    Product_Type: "Clothing",
    Source: "Warehouse A",
    Destination: "Customer E",
    ETD: "2024-08-01",
    ETA: "2024-08-11",
    Mode_of_Transport: "LAND",
    Preferred_Carrier: "UPS",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 148,
    Weight: 120,
    Volume: 1.8,
    Supplier_Name: "PQR Distributors",
    Product_Type: "Books",
    Source: "Warehouse D",
    Destination: "Customer D",
    ETD: "2024-08-04",
    ETA: "2024-08-14",
    Mode_of_Transport: "",
    Preferred_Carrier: "",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
  {
    id: 149,
    Weight: 160,
    Volume: 2.7,
    Supplier_Name: "XYZ Manufacturers",
    Product_Type: "Toys",
    Source: "Warehouse B",
    Destination: "Customer C",
    ETD: "2024-08-07",
    ETA: "2024-08-17",
    Mode_of_Transport: "",
    Preferred_Carrier: "",
    STATUS: "UNPLANNED",
    SHIPMENT_ID: null,
  },
];

export default {
  rows,
  columns,
  columnShipment,
};
