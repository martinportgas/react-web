import React, { Component } from 'react';
import { render } from 'react-dom';

import '../bootstrap/css/bootstrap.css';
import '../bootstrap/css/bootstrap.min.css';

export default class Hello extends Component {
  render() {
    return (
        <div>
            <div class="card mb-3">
                <div class="card-body">
                    <img src="http://localhost:8080/src/img/logo.png" width="200px" height="62px" />    
                    <h4 class="card-title">Mobile Loan Origination</h4>
                    <p class="card-text"><i>Kami hadir dengan aplikasi untuk membantu anda.</i></p>
                    <hr />
                    <div class="card">
                        <div class="card-body">
                            <div class="form-control-sm">
                                <label for="kodeAgent">Kode Agent</label>
                                <input type="text" class="form-control form-control-sm" placeholder="Kode Agent" />
                            </div>
                            <div class="form-control-sm">
                                <label for="nama">Nama sesuai E-KTP</label>
                                <input type="text" class="form-control form-control-sm" placeholder="Nama sesuai E-KTP" />
                            </div>
                            <div class="form-control-sm">
                                <label for="noTelpon">No. Telpon/HP</label>
                                <input type="text" class="form-control form-control-sm" placeholder="No. Telpon/HP" />
                            </div>
                            <div class="form-control-sm">
                                <label for="email">Email</label>
                                <input type="text" class="form-control form-control-sm" placeholder="Email" />
                            </div>
                            <div class="form-control-sm">
                                <label for="provinsi">Provinsi Domisili</label>
                                <select class="form-control form-control-sm">
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                            <div class="form-control-sm">
                                <label for="kota">Kota Domisili</label>
                                <select class="form-control form-control-sm">
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="card">
                        <div class="card-body">
                            <div class="form-control-sm">
                                <label for="photoE-KTP">Upload Foto E-KTP</label>
                                <input type="file" class="form-control form-control-sm" />
                            </div>
                            <div class="form-control-sm">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" value="" />
                                </label>
                                Memiliki NPWP
                            </div>
                            <div class="form-control-sm">
                                <label for="photoNPWP">Upload Foto NPWP</label>
                                <input type="file" class="form-control form-control-sm" />
                            </div>
                            <div class="form-control-sm">
                                <label for="photoTTD">Upload Spesimen Tanda Tangan</label>
                                <input type="file" class="form-control form-control-sm" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="card">
                        <div class="card-body">
                            <div class="form-control-sm">
                                <label for="Username">Username</label>
                                <input type="text" class="form-control form-control-sm" placeholder="Username" />
                            </div>
                            <div class="form-control-sm">
                                <label for="Password">Password</label>
                                <input type="password" class="form-control form-control-sm" placeholder="Password" />
                            </div>
                            <div class="form-control-sm">
                                <label for="re-password">Re-type Password</label>
                                <input type="password" class="form-control form-control-sm" placeholder="Re-type Password" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="form-control-sm">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" value="" />
                        </label>
                        Setuju dengan syarat dan ketentuan
                    </div>
                    <br />
                    <div class="form-control-sm">
                        <button type="button" class="btn btn-sm btn-danger btn-block">Submit</button>
                    </div>
            </div>
            </div>
        <div class="col-12"> 
            <div class="row">
                <div class="clearfix"></div>
            </div>
        </div>
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
