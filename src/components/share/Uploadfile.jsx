import React, { Component } from 'react'
import { MDBInputGroup, MDBBtn } from 'mdbreact';

export default class Uploadfile extends Component {
/**
 * state
 */
    state = {
        form: {
            file: []
        }
    }

    /**
     * onChangeHandlefile
     * @param {*} e 
     */
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
                //console.log("#####", url);
                //Call Parent Component Method
                this.props.picUpload(url)
            },
            false
        );
    };

/**
 * uploadfile
 * @returns uploadfile
 */
    render() {
        return (
            <MDBInputGroup id='file'
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
