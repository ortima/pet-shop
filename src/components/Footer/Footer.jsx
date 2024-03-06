import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 className={styles.brand}>Kitter</h1>
                    <p>
                        Если у вас остались вопросы, свяжитесь с нами <br />
                        <a
                            href="mailto:support@gmail.com"
                            className={styles.link}
                        >
                            support@gmail.com
                        </a>
                    </p>
                    <div className={styles.text}>
                        Ссылка на наши соц сети:
                        <ul className={styles.links}>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 15 18 L 10.96875 18 C 10.96875 18 10.734375 17.988281 10.457031 18.027344 C 10.179688 18.0625 9.765625 18.078125 9.34375 18.558594 L 9.339844 18.5625 C 8.964844 18.992188 8.976562 19.492188 9.023438 19.765625 C 9.070312 20.039062 9.175781 20.246094 9.179688 20.246094 L 9.179688 20.25 C 9.214844 20.34375 12.144531 27.523438 15.839844 31.378906 C 18.445312 34.101562 21.230469 35 23.714844 35 L 25 35 C 25.421875 35 25.800781 34.980469 26.21875 34.765625 C 26.640625 34.546875 27 33.949219 27 33.484375 C 27 32.980469 27.011719 32.496094 27.078125 32.222656 C 27.136719 31.972656 27.113281 32.035156 27.136719 32.03125 C 27.160156 32.039062 27.203125 32.046875 27.285156 32.085938 C 27.464844 32.167969 27.742188 32.347656 28.046875 32.582031 C 28.65625 33.058594 29.378906 33.746094 30.191406 34.277344 C 31.351562 35.046875 32.613281 35 32.613281 35 L 36.769531 35 L 36.8125 34.996094 C 36.8125 34.996094 37.453125 34.980469 38.109375 34.578125 C 38.433594 34.378906 38.824219 34.011719 38.953125 33.457031 C 39.085938 32.90625 38.917969 32.328125 38.597656 31.816406 C 38.480469 31.632812 37.910156 30.804688 35.636719 28.785156 C 35.050781 28.265625 34.648438 27.898438 34.488281 27.703125 C 34.433594 27.632812 34.429688 27.636719 34.417969 27.636719 C 34.429688 27.601562 34.5625 27.324219 34.914062 26.867188 C 35.28125 26.390625 35.835938 25.726562 36.550781 24.816406 C 37.464844 23.652344 38.105469 22.535156 38.507812 21.59375 C 38.710938 21.121094 38.851562 20.695312 38.9375 20.308594 C 39.023438 19.917969 39.089844 19.597656 38.964844 19.136719 C 38.871094 18.792969 38.613281 18.488281 38.363281 18.328125 C 38.113281 18.164062 37.878906 18.101562 37.667969 18.0625 C 37.246094 17.988281 36.875 18 36.53125 18 C 35.808594 18 32.589844 18.027344 32.324219 18.027344 C 32.011719 18.027344 31.515625 18.15625 31.285156 18.285156 C 30.714844 18.613281 30.535156 19.0625 30.535156 19.0625 L 30.480469 19.15625 L 30.449219 19.265625 C 30.449219 19.265625 29.714844 21.636719 28.964844 22.859375 L 28.960938 22.859375 C 28.074219 24.296875 27.414062 24.867188 27.125 25.03125 C 27.09375 25.046875 27.109375 25.039062 27.089844 25.046875 C 27.066406 24.984375 27.035156 24.890625 27.015625 24.722656 C 26.976562 24.34375 27 23.808594 27 23.289062 C 27 21.855469 27.109375 20.960938 26.988281 20.113281 C 26.929688 19.691406 26.777344 19.21875 26.429688 18.855469 C 26.082031 18.492188 25.636719 18.3125 25.1875 18.210938 C 24.71875 18.105469 24.21875 18.011719 23.011719 18 C 21.472656 17.984375 20.46875 18.035156 19.578125 18.429688 L 19.570312 18.4375 L 19.5625 18.4375 C 19.210938 18.605469 18.933594 18.792969 18.6875 19.046875 C 18.566406 19.171875 18.421875 19.265625 18.324219 19.667969 C 18.273438 19.871094 18.265625 20.25 18.496094 20.558594 C 18.722656 20.867188 19.039062 20.960938 19.230469 20.984375 C 19.195312 20.980469 19.375 21.019531 19.515625 21.089844 C 19.660156 21.160156 19.78125 21.261719 19.8125 21.300781 C 19.800781 21.285156 19.933594 21.621094 19.96875 21.929688 C 20.007812 22.238281 20 22.484375 20 22.484375 L 20 22.546875 L 20.003906 22.605469 C 20.003906 22.605469 20.066406 23.285156 20.03125 23.984375 C 20.015625 24.335938 19.972656 24.691406 19.914062 24.90625 C 19.910156 24.917969 19.910156 24.914062 19.90625 24.921875 C 19.65625 24.75 19.078125 24.140625 18.28125 22.828125 C 17.546875 21.609375 16.859375 19.425781 16.859375 19.425781 L 16.84375 19.375 L 16.828125 19.328125 C 16.828125 19.328125 16.699219 18.84375 16.128906 18.441406 C 15.597656 18.070312 15.09375 18.015625 15.09375 18.015625 Z M 14.769531 20 C 14.828125 20.019531 14.945312 20.0625 14.96875 20.074219 L 14.945312 20.003906 C 14.945312 20.003906 14.976562 20.074219 14.976562 20.078125 C 14.976562 20.078125 14.980469 20.078125 14.980469 20.078125 L 14.984375 20.078125 C 14.933594 20.042969 14.976562 20.078125 14.980469 20.089844 C 15.007812 20.183594 15.617188 22.285156 16.574219 23.859375 C 17.441406 25.296875 18.082031 26.101562 18.78125 26.578125 C 19.484375 27.058594 20.425781 27.011719 20.902344 26.761719 C 21.542969 26.429688 21.71875 25.882812 21.84375 25.429688 C 21.96875 24.976562 22.011719 24.515625 22.03125 24.078125 C 22.070312 23.246094 22.003906 22.566406 22 22.5 C 22 22.460938 22.007812 22.136719 21.957031 21.699219 C 21.90625 21.253906 21.8125 20.707031 21.421875 20.15625 C 21.859375 20.089844 22.105469 19.992188 22.988281 20 C 24.121094 20.011719 24.292969 20.058594 24.734375 20.160156 C 24.976562 20.214844 25.003906 20.261719 24.984375 20.238281 C 24.960938 20.214844 24.980469 20.199219 25.007812 20.390625 C 25.0625 20.78125 25 21.777344 25 23.289062 C 25 23.714844 24.957031 24.316406 25.03125 24.945312 C 25.101562 25.574219 25.296875 26.378906 26.058594 26.847656 C 26.488281 27.117188 27.316406 27.210938 28.097656 26.777344 C 28.878906 26.339844 29.679688 25.507812 30.664062 23.90625 C 31.636719 22.328125 32.21875 20.253906 32.28125 20.03125 C 32.28125 20.03125 32.292969 20.027344 32.300781 20.019531 C 32.320312 20.023438 32.296875 20.027344 32.324219 20.027344 C 32.695312 20.027344 35.855469 20 36.53125 20 C 36.71875 20 36.800781 20.011719 36.9375 20.015625 C 36.882812 20.230469 36.804688 20.484375 36.667969 20.808594 C 36.34375 21.566406 35.785156 22.554688 34.980469 23.582031 C 34.285156 24.46875 33.742188 25.109375 33.328125 25.644531 C 32.917969 26.183594 32.59375 26.605469 32.457031 27.21875 C 32.320312 27.832031 32.582031 28.519531 32.933594 28.957031 C 33.285156 29.398438 33.722656 29.765625 34.308594 30.28125 C 36.507812 32.238281 36.871094 32.828125 36.90625 32.882812 L 36.90625 32.886719 C 36.941406 32.945312 36.917969 32.882812 36.933594 32.914062 C 36.808594 32.953125 36.660156 32.996094 36.644531 33 L 32.59375 33 C 32.59375 33 31.847656 32.976562 31.296875 32.609375 L 31.292969 32.609375 C 30.707031 32.222656 30 31.566406 29.273438 31.003906 C 28.910156 30.722656 28.539062 30.457031 28.109375 30.265625 C 27.683594 30.070312 27.136719 29.933594 26.566406 30.105469 C 25.738281 30.351562 25.277344 31.140625 25.128906 31.765625 C 25.023438 32.214844 25.039062 32.605469 25.035156 33 C 25.007812 33 25.035156 33 25 33 L 23.714844 33 C 21.679688 33 19.566406 32.378906 17.285156 29.996094 C 14.320312 26.898438 11.675781 20.910156 11.277344 20 Z M 32.214844 20.007812 C 32.195312 20.011719 32.246094 20.015625 32.289062 20.019531 C 32.285156 20.023438 32.289062 20.015625 32.28125 20.019531 C 32.28125 20.003906 32.238281 20.003906 32.214844 20.007812 Z M 32.214844 20.007812"></path>
                                </svg>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z M 34.087891 16.035156 C 34.362891 16.035156 34.608406 16.080641 34.816406 16.181641 C 35.289406 16.408641 35.530031 16.914688 35.457031 17.679688 C 35.215031 20.202687 33.253938 33.008969 32.835938 34.292969 C 32.477938 35.390969 32.100813 36.335938 31.382812 36.335938 C 30.664813 36.335938 29.880422 36.08425 29.107422 35.53125 C 28.334422 34.97925 23.201281 31.536891 22.488281 31.087891 C 21.863281 30.693891 21.201813 29.711719 22.132812 28.761719 C 22.899812 27.979719 28.717844 22.332938 29.214844 21.835938 C 29.584844 21.464938 29.411828 21.017578 29.048828 21.017578 C 28.923828 21.017578 28.774141 21.070266 28.619141 21.197266 C 28.011141 21.694266 19.534781 27.366266 18.800781 27.822266 C 18.314781 28.124266 17.56225 28.341797 16.78125 28.341797 C 16.44825 28.341797 16.111109 28.301891 15.787109 28.212891 C 14.659109 27.901891 12.750187 27.322734 11.992188 27.052734 C 11.263188 26.792734 10.998047 26.543656 10.998047 26.097656 C 10.998047 25.463656 11.892938 25.026 12.835938 24.625 C 13.831938 24.202 31.066062 16.883437 32.414062 16.398438 C 33.038062 16.172438 33.608891 16.035156 34.087891 16.035156 z"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <div></div>
                <div>
                    <p className={styles.title}>Товары</p>
                    <ul className={styles.text}>
                        <li>Товары для кошек</li>
                        <li>Товары для собак</li>
                        <li>Товары для рыбок</li>
                    </ul>
                </div>
                <div>
                    <p className={styles.title}>О нас</p>
                    <ul className={styles.text}>
                        <li>FAQs</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
