export default function Steps({ food, isLoading }) {
    return (
        <div>
            {isLoading ? (
                <p>Loading.....Please Wait</p>
            ) : (
                food.analyzedInstructions[0].steps.map((step) => (
                    <li key={step.step}>{step.step}</li>
                ))
            )}
        </div>
    );
}