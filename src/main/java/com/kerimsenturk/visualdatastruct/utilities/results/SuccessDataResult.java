package com.kerimsenturk.visualdatastruct.utilities.results;

public class SuccessDataResult<T> extends DataResult<T>{

	public SuccessDataResult(T data, String message) {
		super(data, true, message);
	}
	
	public SuccessDataResult(String message) {
		super(null, true, message);
	}

	//Kullanışlı farklı constructor'lar yazılabilir.
}
