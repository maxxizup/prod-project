import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from '../slice/loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('login slice test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'robert plaudis' };

        expect(loginReducer(state as LoginSchema, loginActions.setUsername('ulans poznaks')))
            .toEqual({ username: 'ulans poznaks' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'i love og buda' };

        expect(loginReducer(state as LoginSchema, loginActions.setPassword('YT812')))
            .toEqual({ password: 'YT812' });
    });
});
