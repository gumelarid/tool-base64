import { useState, useRef } from 'react';

const Encode = () => {
    const [data, setData] = useState('');
    const [selectedOption, setSelectedOption] = useState(0);
    const [result, setResult] = useState('');
    const resultRef = useRef(null);

    const optionFunc = (e) => {
        setSelectedOption(parseInt(e, 10));
        setData('');
        setResult('');
    };

    const getResult = () => {
        try {
            if (selectedOption === 0) {
                // Encode
                return btoa(data);
            } else {
                // Decode
                return atob(data);
            }
        } catch (error) {
            console.error('Error decoding:', error.message);
            return '';
        }
    };

    const handleDataChange = (e) => {
        setData(e.target.value);
        setResult('');
    };

    const handleCopyToClipboard = () => {
        resultRef.current.select();
        document.execCommand('copy');
        alert('Success Copy Result !')
    };

    return (
        <div className='row d-flex flex-column align-content-center'>
            <div className='col-12'>
                <select onChange={(e) => optionFunc(e.target.value)} className='form-select'>
                    <option value={0}>Encode</option>
                    <option value={1}>Decode</option>
                </select>
            </div>
            <div className='col-12 mx-2'>
                <textarea
                    class="form-control form"
                    value={data}
                    onChange={handleDataChange}
                    placeholder='Enter your data'
                ></textarea>
            </div>
            <div className='col-12 mx-2'>
                <h2 id='name'>{selectedOption === 0 ? 'Result Encode' : 'Result Decode'}</h2>
                <textarea
                    class="form-control form"
                    value={getResult()}
                    placeholder='Result'
                    readOnly
                    ref={resultRef}
                ></textarea>
            </div>
            <div className='col-12'>
                <button onClick={handleCopyToClipboard} className='btn btn-sm btn-primary'>Copy to Clipboard</button>
            </div>

        </div>
    );
};

export default Encode;
