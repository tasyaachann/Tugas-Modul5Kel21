import React, { Component } from "react";
import axios from "axios";
import { Modal, Row, Col } from "antd";
import "antd/dist/antd.css";
import "./App.css"
import App from "./App";
export default class tekkom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tekkom: [],
        visible: false,
        nama: "",
        asal: "",
        nim: "",
        };
    }

    handleButton = (nama) => {
        alert(nama);
    };
    handleTambahOrang = () => {
        this.setState({
        visible: true,
        });
    };
    handleNama = (e) => {
        this.setState({
        nama: e.target.value,
        });
        console.log(this.state.nama);
    };
    handleNim = (e) => {
        this.setState({
        nim: e.target.value,
        });
        console.log(this.state.nim);
    };
    handleAsal = (e) => {
        this.setState({
            asal: e.target.value,
        });
        console.log(this.state.asal);
    };
    HandleClickImage = () => {
        alert('aaa')
    }
    handleSubmit = () => {
        if (
            this.state.nama !== "" &&
            this.state.nim !== "" &&
            !this.state.asal !== ""
        ) {
            axios({
            method: "post",
            url: "https://backendcatatantugas.herokuapp.com/mahasiswa/add",
            headers: {
                accept: "*/*",
            },
            data: {
                nama: this.state.nama,
                nim: this.state.nim,
                asal: this.state.asal,
            },
            })
        .then((data) => {
            alert("berhasil menambahkan");
            window.location.reload();
        })
        .catch((error) => {
            alert("gagal lur");
        });
        } else {
            alert("pastikan semua kolom terisi");
        }
    };
    componentDidMount() {
        axios({
            method: "get",
            url: "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15",
            headers: {
                accept: "*/*",
            },
        })
        .then((data) => {
            console.log(data.data);
            this.setState({
                tekkom: data.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <div className="boxWhite">
                    <center>
                        <h1>List Game Steam Kelompok 21</h1>
                    </center>
                        <Modal
                        title="Tambah Orang Bosque"
                        centered
                        visible={this.state.visible}
                        onOk={this.handleSubmit}
                        onCancel={() => this.setState({ visible: false })}
                        width={500}
                        >
                    <div style={{ textAlign: "center" }}>
<p>Nama : </p>{" "}
<input
type="text"
placeholder="nama"
onChange={this.handleNama}
/>
<br />
<p>Nim : </p>{" "}
<input type="text" placeholder="nim" onChange={this.handleNim} />
<br />
<p>Asal : </p>{" "}
<input
type="text"
placeholder="asal"
onChange={this.handleAsal}
/>
<br />
</div>
</Modal>
{this.state.tekkom.map((results, index) => {
    return (
        <div class="grid-container">
        <div class="center">{results.title}
        <img src={results.thumb} alt="game" className="img"/>
        <div class="App">
            Normal Price : {results.normalPrice}, Sale Price : {results.salePrice}
        </div>
        </div>
      </div>
        );
        })} 

        </div>
        </div>
        );
        }
        }
        