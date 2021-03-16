import React, { Component } from 'react'
import { MDBInputGroup, MDBBtn } from 'mdbreact';

export default class Uploadfile extends Component {

    state = {
        form: {
            file: []
        }
    }

    onChangeHandleFile = (e) => {
        console.log(e.target.files[0])
        var file = e.target.files[0];
        var reader = new FileReader();

        reader.readAsDataURL(file);
        reader.addEventListener("load", () => {
                this.setState(state => ({
                    ...state,
                    form: {
                        file: [reader.result]
                    }
                }));
                const url = reader.result;
                console.log("#####", url);
            },
            false
        );
    };

    onSubmit = (e) => {
        console.log("changed image:" + this.state.form.file)
    }

    render() {
        return (
            <MDBInputGroup id='file'
                append={
                    <MDBBtn
                        color="mdb-color"
                        outline
                        className="m-0 px-3 py-2 z-depth-0"
                        onClick={this.onSubmit}
                    >
                        Upload
                    </MDBBtn>
                }
                inputs={
                    <div className="custom-file">
                        <input onChange={this.onChangeHandleFile}
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                            Choose file
                        </label>
                    </div>
                }
                containerClassName="mb-3"
            />
        )
    }
}
