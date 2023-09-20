import { DotSpinner } from '@uiball/loaders';

export const Loader = () => {
	return (
        <div className="container-loader">
            <DotSpinner size={30} speed={0.9} color='blue' />;
        </div>
    )
};
