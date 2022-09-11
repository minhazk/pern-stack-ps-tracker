type InputProps = {
    setValue: Function;
    value: any;
};

const StyledInput = ({ setValue, value }: InputProps) => {
    return (
        <input
            onInput={e => setValue((e.target as HTMLInputElement).value)}
            value={value}
            className='w-full border border-slate-200 rounded py-1 px-3 outline-none focus:border-blue-400 focus:shadow-[0_0_0_.25rem] focus:shadow-blue-200 transition-shadow'
            type='text'
        />
    );
};

export default StyledInput;
